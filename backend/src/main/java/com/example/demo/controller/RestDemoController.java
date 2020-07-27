package com.example.demo.controller;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.objects.Paste;
import com.example.demo.service.FirebaseService;

@RestController
public class RestDemoController {
	
	@Autowired
	FirebaseService firebaseService;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getPasteDetails")
	public Paste getExample(@RequestParam(value = "id") String id) throws InterruptedException, ExecutionException {
		return firebaseService.getPasteDetails(id);
	}

	@PostMapping("/createPaste")
	public String postExample(@RequestBody Paste paste) throws InterruptedException, ExecutionException {
		return firebaseService.savePasteDetails(paste);
	}

	@PutMapping("/updatePasteDetails")
	public String putExample(@RequestBody Paste paste) throws InterruptedException, ExecutionException {
		return firebaseService.updatePasteDetails(paste);
	}

	@DeleteMapping("/deletePaste")
	public String deleteExample(@RequestHeader String id) {
		return firebaseService.deletePaste(id);
	}

}
