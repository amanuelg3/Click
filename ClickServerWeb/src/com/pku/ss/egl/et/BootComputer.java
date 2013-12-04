package com.pku.ss.egl.et;
import java.io.Serializable;

  
public class BootComputer implements Serializable {   
  
    private static final long serialVersionUID =    
                   2683028985839110062L;   
       
     //JNI����   
    public native void switchBoot(int i);
    static{
    	System.loadLibrary("switchBootDLL");
    }
    public void shutDown()//�ػ�
    {
    	switchBoot(1);
    }
    public void logOff()//ע��
    {
    	switchBoot(2);
    }
    public void reboot()//����
    {
    	switchBoot(3);
    }
    public void lock()//����
    {
    	switchBoot(4);
    }
    public void hibernate()//����
    {
    	switchBoot(5);
    }
    public void sleep()//����
    {
    	switchBoot(6);
    }
    private static BootComputer instance = null;   
    
    public static BootComputer getInstance() {   
        if (instance == null) {
            instance = new BootComputer();
        }   
        return instance;   
    } 
//    public static void main(String[] args) {   
//           
//    	BootComputer soundControl = new BootComputer();   
//        soundControl.shutDown();
//    	
//    }   
    


  
}  
