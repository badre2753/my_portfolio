`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 01.09.2025 10:17:31
// Design Name: 
// Module Name: tb_aafu
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


module tb_aafu(

    );
     reg [0:16] in;
    wire [1:8] y;
    
     aafu uut(in,y);
     initial
     begin
        
 
 

 









in=17'b11111110010000000;#10;$display("in=%b,y=%b",in,y);//-7
in=17'b11111110011000000;#10;$display("in=%b,y=%b",in,y);//-6.5
in=17'b11111110100000000;#10;$display("in=%b,y=%b",in,y);//-6
in=17'b11111110101000000;#10;$display("in=%b,y=%b",in,y);//-5.5
in=17'b11111110110000000;#10;$display("in=%b,y=%b",in,y);//-5
in=17'b11111110111000000;#10;$display("in=%b,y=%b",in,y);//-4.5
in=17'b11111111000000000;#10;$display("in=%b,y=%b",in,y);//-4
in=17'b11111111001000000;#10;$display("in=%b,y=%b",in,y);//-3.5
in=17'b11111111010000000;#10;$display("in=%b,y=%b",in,y);//-3
in=17'b11111111011000000;#10;$display("in=%b,y=%b",in,y);//-2.5
in=17'b11111111100000000;#10;$display("in=%b,y=%b",in,y);//-2
in=17'b11111111101000000;#10;$display("in=%b,y=%b",in,y);//-1.5
in=17'b11111111110000000;#10;$display("in=%b,y=%b",in,y); //-1
in=17'b11111111111000000;#10;$display("in=%b,y=%b",in,y); //-.5
in=17'b00000000001000000;#10;$display("in=%b,y=%b",in,y);//// 0.5,
in=17'b00000000010000000;#10;$display("in=%b,y=%b",in,y);////1,
in=17'b00000000011000000;#10;$display("in=%b,y=%b",in,y);////1.5,
in=17'b00000000100000000;#10;$display("in=%b,y=%b",in,y);////2,
in=17'b00000000101000000;#10;$display("in=%b,y=%b",in,y);//2.5,
in=17'b00000000110000000;#10;$display("in=%b,y=%b",in,y);////3,
in=17'b00000000111000000;#10;$display("in=%b,y=%b",in,y);////3.5,
in=17'b00000001000000000;#10;$display("in=%b,y=%b",in,y);////4,
in=17'b00000001001000000;#10;$display("in=%b,y=%b",in,y);////4.5,
in=17'b00000001010000000;#10;$display("in=%b,y=%b",in,y);////5,
in=17'b00000001011000000;#10;$display("in=%b,y=%b",in,y);////5.5
in=17'b00000001100000000;#10;$display("in=%b,y=%b",in,y);////6,
in=17'b00000001101000000;#10;$display("in=%b,y=%b",in,y);////6.6
in=17'b00000001110000000;#10;$display("in=%b,y=%b",in,y);////7,
      
        
  $finish;
        
   end
    
endmodule
