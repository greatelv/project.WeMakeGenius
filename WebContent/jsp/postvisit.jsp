<%@page import="org.json.JSONArray"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%
	String ID = request.getParameter("ID");
	try{
		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://http://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		String sql = "INSERT INTO VISIT(USER_ID,LOGIN_TIME) VALUES (?,now())";
		
		PreparedStatement ps;
		ps = con.prepareStatement(sql);
		ps.setString(1, ID);
		ps.executeUpdate();
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		out.println("postvisit.jsp over.");	
	}
%>