package com.hugo.backangular.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


@Service
public class StorageService {

	private final Path rootLocation = Paths.get("", "images");

public String store(MultipartFile file) throws Exception {
		String filename = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			if (file.isEmpty()) {
				throw new Exception("Failed to store empty file " + filename);
			}
			if (filename.contains("..")) {
				// This is a security check
				throw new Exception(
						"Cannot store file with relative path outside current directory "
								+ filename);
			}
			try (InputStream inputStream = file.getInputStream()) {
				int i = 0;
				boolean exists;
				do {
					if (i == 0) {
						exists = Files.exists(this.rootLocation.resolve(filename));
					} else {
						exists = Files.exists(this.rootLocation.resolve(filename.split("\\.")[0] + "_" + (i) + "." + filename.split("\\.")[1]));
					}
					i++;
				} while (exists);

				if (i > 1) {
					filename = filename.split("\\.")[0] + "_" + (i-1) + "." + filename.split("\\.")[1];
				}

				Files.copy(inputStream, this.rootLocation.resolve(filename),
					StandardCopyOption.REPLACE_EXISTING);
			}
			return filename;
		}
		catch (IOException e) {
			throw new Exception("Failed to store file " + filename, e);
		}
	}

}
