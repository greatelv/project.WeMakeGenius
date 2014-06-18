<%@page import="org.json.JSONArray"%>

<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%

JSONArray 	jsona = new JSONArray();

String ID = request.getParameter("ID");
String NAME = request.getParameter("NAME");
String AVATAR = request.getParameter("AVATAR");




try{
	String driverName = "com.mysql.jdbc.Driver";
	
	Class.forName(driverName);
	Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
	String sql = "INSERT INTO user(ID, NAME, AVATAR, REGISTER_TIME) VALUES(?,?,?,now())";
	PreparedStatement ps;
	
	ps = con.prepareStatement(sql);
	ps.setString(1, ID);
	ps.setString(2, NAME);
	ps.setString(3, AVATAR);
	ps.executeUpdate();
	
	ps.close();
	con.close();
}catch (ClassNotFoundException e){
	e.printStackTrace();
}catch (SQLException e){
	e.printStackTrace();
}finally{
	out.println("postuser.jsp over.");	
}
%>