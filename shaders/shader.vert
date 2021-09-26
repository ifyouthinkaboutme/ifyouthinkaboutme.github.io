// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif

attribute vec3 aPosition;

attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  
  // scale the rect by two, and move it to the center of the screen
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;
  vTexCoord = aTexCoord;
}