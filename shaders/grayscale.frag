#version 460 core
#include <flutter/runtime_effect.glsl>

out vec4 fragColor;

uniform vec2 resolution;
uniform sampler2D image;


void main(){
    vec2 uv = (FlutterFragCoord().xy / resolution.xy);
    vec3 imageColor = texture(image, uv).xyz;
    float luminance = imageColor.r * 0.299 + imageColor.g * 0.587 + imageColor.b * 0.114;
    fragColor = vec4(vec3(luminance), 1.0);
}