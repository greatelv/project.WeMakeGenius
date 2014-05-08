<%@page import="org.json.JSONArray"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%	

	String ID = request.getParameter("ID");

	String test = null;
	int i = 0;
	try{
		String driverName = "com.mysql.jdbc.Driver";
	
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wmg_dev","wmg","wmg");
		String sql = "select ID from USER";
		
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery(sql);
		
		while(rs.next()){
			i += 1;
		};
		con.close();
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		out.println(i);
	}
	
	try{
		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wmg_dev","wmg","wmg");
		String sql = "select ID from USER";
		
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery(sql);
		
		while(rs.next()){
			
		};
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		
	}

%>