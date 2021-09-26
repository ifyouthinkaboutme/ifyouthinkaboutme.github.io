#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D tex2;

void main() {
   	//vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 st = vTexCoord;

    vec4 video1 = texture2D(tex0, st);
    vec4 video2 = texture2D(tex1, st);

    //float pct = abs(sin(u_time));
    float pct = texture2D(tex2,st).r;

    vec3 color = mix(video1.rgb, video2.rgb, pct);

    gl_FragColor = vec4(color, 1.0);
}