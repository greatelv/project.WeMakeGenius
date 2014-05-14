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
		Connection con = DriverManager.getConnection("jdbc:mysql://http://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		PreparedStatement ps;
		ResultSet rs;
		Statement stat = con.createStatement();
		rs = stat.executeQuery("select * from USER");
		while(rs.next()){
			JSONObject 	jsono = new JSONObject();
			
			jsono.put("ID", rs.getString("ID"));
			jsono.put("NAME", rs.getString("NAME"));
			jsono.put("AVATAR", rs.getString("AVATAR"));
			jsono.put("REGISTER_TIME", rs.getString("REGISTER_TIME"));
			
			jsona.put(jsono); 	 	
			
			/* HashMap<String, Object> map = new HashMap<String, Object>();
			String ID 				= "\"" + rs.getString("ID") + "\"";
			String NAME 			= "\"" + rs.getString("NAME") + "\"";
			String AVATAR 			= "\"" + rs.getString("AVATAR") + "\"";
			String REGISTER_TIME 	= "\"" + rs.getDate("REGISTER_TIME") + "\"";
			map.put("ID",ID);
			map.put("NAME",NAME);
			map.put("AVATAR",AVATAR);
			map.put("REGISTER_TIME",REGISTER_TIME);
			
			jsona.put(map); */
		}
		
		//jsono.put("item", jsona);
	}catch (ClassNotFoundException e){
		e.printStackTrace();
	}catch (SQLException e){
		e.printStackTrace();
	}finally{
		out.println(jsona);	
	}
  
%>