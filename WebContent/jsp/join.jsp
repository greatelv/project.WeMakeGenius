<%@page import="org.json.JSONArray"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%

String ID = request.getParameter("ID");
String NAME = request.getParameter("NAME");
String AVATAR = request.getParameter("AVATAR");

out.print(ID + "," + NAME + "," + AVATAR);

try{
	String driverName = "com.mysql.jdbc.Driver";
	
	Class.forName(driverName);
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wmg_dev","wmg","wmg");
	String sql = "INSERT INTO USER(ID, NAME, AVATAR, REGISTER_TIME) VALUES(?,?,?,now())";
	PreparedStatement ps;
	
	ps = con.prepareStatement(sql);
	ps.setString(1, ID);
	ps.setString(2, NAME);
	ps.setString(3, AVATAR);
	ps.executeUpdate();
	
}catch (ClassNotFoundException e){
	e.printStackTrace();
}catch (SQLException e){
	e.printStackTrace();
}finally{
	out.println("회원가입완료.");	
}
%>