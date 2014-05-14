<%@page import="org.json.JSONArray"%>

<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%

String ID = request.getParameter("ID");
String NAME = request.getParameter("NAME");
String AVATAR = request.getParameter("AVATAR");
String message = "";
String error = "회원가입이 정상적으로 완료되었습니다.";
int result = 1;

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
	
	message = "회원가입이 정상적으로 완료되었습니다.";
	
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