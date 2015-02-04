package com.vantage.dto;

public abstract class JsonResponse<T> {
    public abstract boolean isSuccess();

    //when overridden, this property should contain the name of the wrapped type
    //ie @JsonProperty("The property name you want to use"
    public abstract T getItem();
}