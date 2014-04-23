<%@page import="org.json.JSONArray"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%	

	String ID = request.getParameter("ID");

	out.print(ID);
	
	try{
		String driverName = "com.mysql.jdbc.Driver";
	
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wmg_dev","wmg","wmg");
		String sql = "";
		PreparedStatement ps;

		ps.executeUpdate();
	
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		out.println("postuser.jsp over.");	
	}

%>