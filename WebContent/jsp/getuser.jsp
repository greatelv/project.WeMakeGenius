<%@page import="org.json.JSONArray"%>

<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="com.wemakegenius.*"%>
<%	

	JSONArray 	jsona = new JSONArray();
	

	try{
		
		String driverName = "com.mysql.jdbc.Driver";
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		PreparedStatement ps;
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery("select * from user");
		while(rs.next()){
			JSONObject 	jsono = new JSONObject();
			
			jsono.put("ID", rs.getString("ID"));
			jsono.put("NAME", rs.getString("NAME"));
			jsono.put("REGISTER_TIME", rs.getString("REGISTER_TIME"));
			
			jsona.put(jsono); 	 	

		}
		
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		out.println(jsona);	
	}
  
%>