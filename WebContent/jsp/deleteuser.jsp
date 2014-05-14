<%@page import="org.json.JSONArray"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%

String ID = request.getParameter("ID");
String sql = null;
try{
	String driverName = "com.mysql.jdbc.Driver";
	
	Class.forName(driverName);
	Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
	Statement stmt = con.createStatement();
	
	sql = "DELETE FROM user WHERE ID = " + "'" + ID + "'";

	stmt.executeUpdate(sql);
	
	
}catch (ClassNotFoundException e){
	e.printStackTrace();
}catch (SQLException e){
	e.printStackTrace();
}finally{
	out.println(sql);	
}
%>