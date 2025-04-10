package dev.ilya.online_store.dto.requests;

import lombok.Data;

import java.util.List;

@Data
public class searchRequest {
    private List<String> products;
}
