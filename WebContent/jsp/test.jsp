
<%@page import="org.json.JSONArray"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%	
	int i = 0;
	try{

		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery("select * from user");
		while(rs.next()){
			i += 1;
		}
		
		rs.close();
		con.close();
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{

	}  
%>
<%
try{
		String[] sid;
		sid = new String[i];
		String[] sna;
		sna = new String[i];
		String[] sav;
		sav = new String[i];
		String[] sti;
		sti = new String[i];
		
		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		PreparedStatement ps;
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery("select * from user");
		i = 0;
		while(rs.next()){
			
			sid[i] = rs.getString("ID");
			sna[i] = rs.getString("NAME");
			sav[i] = rs.getString("AVATAR");
			sti[i] = rs.getString("REGISTER_TIME");
			
			i += 1;
		}
		for(int b = 0 ; b < i ; b++){
			out.println("[USER TABLE]");
			out.println("["+ b +"]" + "ID : " + sid[b] + "|" + "NAME : " + sna[b] + "|"+ "AVATAR : " + sav[b] + "|" + "Time : " + sti[b] );
		};
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		
	}
  
%>

<%
	try{

		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery("select * from play");
		while(rs.next()){
			rs.getInt("SEQUENCE");
			rs.getString("USER_ID");
			rs.getString("GAME_TYPE");
			rs.getInt("SCORE");
			rs.getString("START_TIME");
			rs.getInt("MAX_COMBO");
		}
		
		rs.close();
		con.close();
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
	}
%>