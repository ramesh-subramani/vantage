package com.vantage.template.service.impl;

import java.io.File;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Service;

import com.vantage.entity.PropertyTemplate;
import com.vantage.template.service.TemplateService;

@Service
public class TemplateServiceImpl implements TemplateService {

	@Override
	public void saveTemplate(PropertyTemplate propertyTemplate) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			mapper.writeValue(new File("c:\\vantage\\template.json"),propertyTemplate);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public PropertyTemplate getTemplate() {
		ObjectMapper mapper = new ObjectMapper();
		PropertyTemplate propertyTemplate;
		try {
			propertyTemplate = mapper.readValue(new File("c:\\vantage\\template.json"), PropertyTemplate.class);
		} catch (Exception e) {
			propertyTemplate = new PropertyTemplate();
			propertyTemplate.setTemplate(e.getMessage());
			
		}
		return propertyTemplate;
	}

}
