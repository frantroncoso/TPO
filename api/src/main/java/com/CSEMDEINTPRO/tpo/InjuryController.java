package com.CSEMDEINTPRO.tpo;

import java.util.concurrent.atomic.AtomicLong;

import com.CSEMDEINTPRO.tpo.models.Injury;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InjuryController {

    private static final String template = "Torcedura";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/injurys")
    public Injury injury(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Injury(counter.incrementAndGet(), String.format(template, name));
    }
}