package com.hugo.backangular.controller;

import java.io.IOException;
import java.io.InputStream;

import javax.ws.rs.QueryParam;

import org.apache.commons.compress.utils.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.hugo.backangular.service.StorageService;

@Controller()
@RequestMapping("/images")
public class ImageController {

	@Autowired
	private StorageService storageService;

	@GetMapping(value = "/1", produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] getImageWithMediaType(@QueryParam("filename") String filename) throws IOException {
		InputStream in = getClass()
				.getResourceAsStream("images/" + filename);
		return IOUtils.toByteArray(in);
	}

	@PostMapping("/")
	public ResponseEntity handleFileUpload(@RequestParam("file") MultipartFile file) {
		try {
			storageService.store(file);
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity(HttpStatus.ACCEPTED);
	}

}
