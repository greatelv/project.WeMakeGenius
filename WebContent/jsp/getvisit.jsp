<%@page import="org.json.JSONArray"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%
	JSONArray 	jsona = new JSONArray();

	try{
		
		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wmg_dev","wmg","wmg");
		PreparedStatement ps;
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery("select * from VISIT");
		
		while(rs.next()){
			
			JSONObject 	jsono = new JSONObject();
			
			
			jsono.put("ID", rs.getString("USER_ID"));
			jsono.put("LOGINTIME", rs.getTime("LOGIN_TIME"));
			
			jsona.put(jsono); 	
		}
		
	}catch (ClassNotFoundException e){
		//e.printStackTrace();
		out.println(e);
	}catch (SQLException e){
		//e.printStackTrace();
		out.println(e);
	}finally{
		out.println(jsona);	
	}
	
%>