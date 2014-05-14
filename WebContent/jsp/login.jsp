<%@page import="org.json.JSONArray"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%	

	String ID = request.getParameter("ID");
	String message = "";
	int result = 0;
	String test = null;
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
			
			i += 1;
		}
		for(int b = 0 ; b < i ; b++){
			if(ID.equals(sid[b])){
				result += 1;
			}
		};
		if(result == 1){
			message = "해당 ID가 존재합니다.";
		}
		else
			message = "해당 ID가 존재하지 않습니다.";
		
	}catch (ClassNotFoundException e){
		e.printStackTrace();
		result = 0;
		message = e.getMessage().toString();
	}catch (SQLException e){
		e.printStackTrace();
		result = 0;
		message = e.getMessage().toString();
	}finally{
		JSONObject 	jsono = new JSONObject();
		jsono.put("result", result);
		jsono.put("message", message);
		out.println(jsono);
	}
  
%>