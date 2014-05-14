
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
		out.println(i);
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
		while(rs.next()){
			int a = 0;
			sid[a] = rs.getString("ID");
			sna[a] = rs.getString("NAME");
			sav[a] = rs.getString("AVATAR");
			sti[a] = rs.getString("REGISTER_TIME");
			a++;
		}
	
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		out.println();	
	}
  
%>