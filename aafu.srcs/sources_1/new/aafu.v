`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 30.08.2025 02:16:12
// Design Name: 
// Module Name: aafu
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


//module aafu(

  //  );

 module sgn(i0,i16,i15,f,g);
input i0,i16,i15;
output f,g;
wire t1;
assign t1=i0&i16;
assign g=i15|i16;
assign f=i15^t1;
endmodule


module SIGN_conv(integerr,sgn,fraction,modIn

    );
    input  sgn;
    input [1:9] integerr;
    input [10:16] fraction;
    output [0:15] modIn;
    wire [2:15] t;
    wire w;
   assign modIn[15]=fraction[16];
    
    sgn g16(sgn,fraction[16],fraction[15],modIn[14],t[15]);
    sgn g15(sgn,t[15],fraction[14],modIn[13],t[14]);
    sgn g14(sgn,t[14],fraction[13],modIn[12],t[13]);
    sgn g13(sgn,t[13],fraction[12],modIn[11],t[12]);
    sgn g12( sgn,t[12],fraction[11],modIn[10],t[11]);
    sgn g11(sgn,t[11],fraction[10],modIn[9],t[10]);
    sgn g10(sgn,t[10],integerr[9],modIn[8],t[9]);
    sgn g9(sgn,t[9],integerr[8],modIn[7],t[8]);
    sgn g8(sgn,t[8],integerr[7],modIn[6],t[7]);
    sgn g7(sgn,t[7],integerr[6],modIn[5],t[6]);
    sgn g6(sgn,t[6],integerr[5],modIn[4],t[5]);
    sgn g5(sgn,t[5],integerr[4],modIn[3],t[4]);
    sgn g4(sgn,t[4],integerr[3],modIn[2],t[3]);
    sgn g3(sgn,t[3],integerr[2],modIn[1],t[2]);
    assign w=t[3]&sgn;
   assign modIn[0]=integerr[1]^w;  endmodule
   
   module DOMAIN_Decoder(in,y

    );
    input [7:16] in;
    output reg [1:0] y;
    always @(in)
    begin
    if(in[7:8]== 2'b00)
       begin if(in[9]==0)
                y=2'b00;
               else if (in[10:16]==7'b000000)
                   y=2'b00;
              else
              y=2'b01;     end
    else  if(in[7:8]== 2'b01)
        begin if(in[9:12]==4'b0010 )
                 y=2'b01;
               else if (in[9:10]==2'b0 & in[11]==1'b0)
                    y=2'b01;
               else if (in[9:10]==2'b0 & in[11:12]==2'b11 &in[13:16]==4'b0)
                     y=2'b01;   
               else y= 2'b10;        end   
               
    else  if(in[7:8]== 2'b10)
        begin if(in[9]==0)
                 y=2'b10;
                else if (in[9:16]==8'b10000000)
                   y=2'b10;
               else
               y=2'b11;     end 
   else 
                 y=2'b11;    
                                  
     
     
            
            
       end
    
    
    
    
endmodule

module mux_c(c1,c2,c3,c4,sel,y

    );
    input [1:16] c1,c2,c3,c4;
    input [1:0]sel;
    output reg [1:16]y; 
    always@(*)
    begin
    if(sel==2'b00)
      y=c1;
     if(sel==2'b01)
      y=c2;
       if(sel==2'b10)
      y=c3;
       if(sel==2'b11)
      y=c4;
    
    
      
    
    
    end
    
    
    
    
endmodule

module modified_input_block(in,y1,y2,y3,y4

    );
    input [1:16] in;
    output [1:16] y1,y2,y3,y4;
    
    
    assign y1=in>>2;
    assign y2=in>>3;
    assign y3=in>>5;
    assign y4=in>>6;
    
    
    
    
    
    
    
    
    
    
    
endmodule
module adder(a,b,ci,sum,cout);
 input a,b,ci;
 output sum,cout;
 assign sum=a^b^ci;
 assign cout= (a&b)|ci&(a|b);


endmodule


module adder_ful(in1,in2,sum ,cout

    );
    input [1:16]in1,in2;
    output [1:16] sum;
    output cout;
    wire [14:0] c;
    
    adder f0(in1[16],in2[16],0,sum[16], c[0]);
    adder f1(in1[15],in2[15],c[0],sum[15], c[1]);
    adder f2(in1[14],in2[14],c[1],sum[14], c[2]);
    adder f3(in1[13],in2[13],c[2],sum[13], c[3]);
    adder f4(in1[12],in2[12],c[3],sum[12], c[4]);
    adder f5(in1[11],in2[11],c[4],sum[11], c[5]);
    adder f6(in1[10],in2[10],c[5],sum[10], c[6]);
    adder f7(in1[9],in2[9],c[6],sum[9], c[7]);
    adder f8(in1[8],in2[8],c[7],sum[8], c[8]);
    adder f9(in1[7],in2[7],c[8],sum[7], c[9]);
    adder f10(in1[6],in2[6],c[9],sum[6], c[10]);
    adder f11(in1[5],in2[5],c[10],sum[5], c[11]);
    adder f12(in1[4],in2[4],c[11],sum[4], c[12]);
    adder f13(in1[3],in2[3],c[12],sum[3], c[13]);
    adder f14(in1[2],in2[2],c[13],sum[2], c[14]);
    adder f15(in1[1],in2[1],c[14],sum[1], cout);
        

    
    
    
    
    
    
    
    
    
    
    
    
endmodule
module mux_2to1(a,b,sel,y

    );
    input [0:7] a,b;
    input sel;
    
    output  [0:7] y;
    assign y= sel?a:b;
    endmodule
    module selective_1_comp( Q,sel,q1,q2,q3,q4,q5,q6,q7,q8

    );
    input [9:16] Q;
    input sel;
    output q1,q2,q3,q4,q5,q6,q7,q8;
    
    assign q1=Q[9];
    assign q2=Q[10]^sel;
    assign q3=Q[11]^sel;
    assign q4=Q[12]^sel;
    assign q5=Q[13]^sel;
    assign q6=Q[14]^sel;
    assign q7=Q[15]^sel;
    assign q8=Q[16]^sel;
    
    
   
      
    
    
endmodule

module aafu(In,Y

    );
    input [0:16] In;
    output  [1:8] Y;
    wire [1:8] y;
    
    wire [1:16] modIn;
    wire [1:0] A;
    wire [1:16] t1,t2,t3,t4,t5,Q,sum;
    wire p,cout;
    wire [1:8] r;
    
    
    SIGN_conv S(In[1:9],In[0],In[10:16],modIn);
    DOMAIN_Decoder D(modIn[7:16],A);
    mux_c M1(16'b0000000001000000,16'b0000000001010000,16'b00000000001101100,16'b0000000001110100,A,t1);
    
    assign p=modIn[1]|modIn[2] | modIn[3]|modIn[4]|modIn[5]| modIn[6]|(modIn[7]&modIn[8]);
    modified_input_block B(modIn[1:16],t2,t3,t4,t5);
    mux_c M2(t2,t3,t4,t5,A,Q);
    adder_ful F(t1,Q,sum,cout);
   
    mux_2to1 M3(8'b10000000,sum[9:16],p,r);
         

    selective_1_comp C(r,In[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);
    assign Y= In[0]?8'b00000001+y:y;

    
    
    
    
    
    
    
    
endmodule
    
