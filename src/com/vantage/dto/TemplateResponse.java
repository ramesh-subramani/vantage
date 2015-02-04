package com.vantage.dto;

import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.codehaus.jackson.annotate.JsonProperty;

import com.vantage.entity.PropertyTemplate;

@SuppressWarnings("serial")
@JsonAutoDetect(getterVisibility = Visibility.ANY, fieldVisibility = Visibility.NONE, setterVisibility = Visibility.NONE)
public class TemplateResponse  extends JsonResponse<PropertyTemplate> implements Serializable  {

	private boolean success;
	private PropertyTemplate propertyTemplate;
	
	public TemplateResponse(boolean success, PropertyTemplate propertyTemplate) {
		super();
		this.success = success;
		this.propertyTemplate = propertyTemplate;
	}

	@Override
	public boolean isSuccess() {
		// TODO Auto-generated method stub
		return this.success;
	}

	@Override
	@JsonProperty("propertyTemplate")
	public PropertyTemplate getItem() {
		// TODO Auto-generated method stub
		return this.propertyTemplate;
	}

}
