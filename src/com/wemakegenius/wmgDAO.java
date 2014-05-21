package com.wemakegenius;
import java.io.*;
import java.sql.*;

public class wmgDAO {
	String driverName = "com.mysql.jdbc.Driver";
	String url = "jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev";
	private String username = "wmg";
	private String pwd = "wmg";
	private Connection con;
	PreparedStatement ps;
	private ResultSet rs;
	private int result = 0;
	
	
	public void getConnection(){
		try{
			Class.forName(driverName);
			con = DriverManager.getConnection(url,username,pwd);
		} catch(Exception e){
		     System.out.println(e.getMessage());
		}
	}
	public void disConnection(){
		try {
			if(ps != null)
				ps.close();
			if(con != null)
				con.close();
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
