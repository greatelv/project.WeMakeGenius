<%@page import="org.json.JSONArray"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%

String GAMETYPE = request.getParameter("GAMETYPE");
String SCORE = request.getParameter("SCORE");
int score = Integer.parseInt(SCORE);
String MAXCOMBO = request.getParameter("MAXCOMBO");
int maxcombo = Integer.parseInt(MAXCOMBO);
String ID = request.getParameter("ID");

//out.print(GAMETYPE + "," + score + "," + maxcombo + "," + ID);

try{
	String driverName = "com.mysql.jdbc.Driver";
	
	Class.forName(driverName);
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wmg_dev","wmg","wmg");
	String sql = "INSERT INTO PLAY(USER_ID, GAME_TYPE, SCORE, START_TIME, MAX_COMBO) VALUES(?,?,?,now(),?)";
	PreparedStatement ps;
	
	ps = con.prepareStatement(sql);
	ps.setString(1, ID);
	ps.setString(2, GAMETYPE);
	ps.setInt(3, score);
	ps.setInt(4, maxcombo);
	ps.executeUpdate();
	
	ps.close();
}catch (ClassNotFoundException e){
	e.printStackTrace();
}catch (SQLException e){
	e.printStackTrace();
}finally{
	out.println("score입력 완료");	
}
%>