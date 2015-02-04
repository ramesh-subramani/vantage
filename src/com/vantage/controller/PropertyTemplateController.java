package com.vantage.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vantage.dto.TemplateResponse;
import com.vantage.entity.PropertyTemplate;
import com.vantage.template.service.TemplateService;

@Controller
public class PropertyTemplateController {
	
	@Autowired
	TemplateService templateService;

	@RequestMapping(value = "/propertyTemplate", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public void saveTemplate(@RequestBody PropertyTemplate propertyTemplate) {
		templateService.saveTemplate(propertyTemplate);
	}
	
	@RequestMapping(value = "/propertyTemplate", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
	public TemplateResponse getTemplate(){
		PropertyTemplate propertyTemplate = templateService.getTemplate();
		return new TemplateResponse(true,propertyTemplate);
	}
	
}
