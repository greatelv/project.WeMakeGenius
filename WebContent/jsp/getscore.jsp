<%@page import="org.json.JSONArray"%>
<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%	

	JSONArray 	jsona = new JSONArray();
	String id 	 = request.getParameter("id");
	String type  = request.getParameter("type");
	
	if(type.equals("score")){
		try{
		
			String driverName = "com.mysql.jdbc.Driver";
		
			Class.forName(driverName);
			Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		
			String sql  = "SELECT USER_ID, GAME_TYPE, SCORE, MAX_COMBO ";
		   	   	   sql += "FROM play GROUP BY GAME_TYPE, USER_ID, SCORE ";
		   	   	   sql += "HAVING USER_ID = '"+ id +"' ";
		   		   sql += "ORDER BY SCORE DESC";
		
			PreparedStatement ps;
			ResultSet rs;
			Statement stat = con.createStatement();
			rs = stat.executeQuery(sql);
			while(rs.next()){
				JSONObject 	jsono = new JSONObject();
			
				jsono.put("SCORE", rs.getInt("SCORE"));
				jsono.put("MAXCOMBO", rs.getInt("MAX_COMBO"));
				jsono.put("ID", rs.getString("USER_ID"));
				jsono.put("GAMETYPE", rs.getString("GAME_TYPE"));
			
				jsona.put(jsono); 	 	
				
			}
			rs.close();
			stat.close();
			con.close();
		}catch (ClassNotFoundException e){
			//e.printStackTrace();
			out.println(e);
		}catch (SQLException e){
			//e.printStackTrace();
			out.println(e);
		}finally{
			out.println(jsona);	
		}
	}
	else if(type.equals("combo")){
		try{
			
			String driverName = "com.mysql.jdbc.Driver";
		
			Class.forName(driverName);
			Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		
			String sql  = "SELECT USER_ID, GAME_TYPE, SCORE, MAX_COMBO ";
		   	   	   sql += "FROM play GROUP BY GAME_TYPE, USER_ID, SCORE ";
		   	   	   sql += "HAVING USER_ID = '"+ id +"' ";
		   		   sql += "ORDER BY MAXCOMBO DESC";
		
			PreparedStatement ps;
			ResultSet rs;
			Statement stat = con.createStatement();
			rs = stat.executeQuery(sql);
			while(rs.next()){
				JSONObject 	jsono = new JSONObject();
			
				jsono.put("SCORE", rs.getInt("SCORE"));
				jsono.put("MAXCOMBO", rs.getInt("MAX_COMBO"));
				jsono.put("ID", rs.getString("USER_ID"));
				jsono.put("GAMETYPE", rs.getString("GAME_TYPE"));
			
				jsona.put(jsono); 	 	
				
			}
			rs.close();
			stat.close();
			con.close();
		}catch (ClassNotFoundException e){
			//e.printStackTrace();
			out.println(e);
		}catch (SQLException e){
			//e.printStackTrace();
			out.println(e);
		}finally{
			out.println(jsona);	
		}
	}
	else if(type.equals("play")){
		try{
			
			String driverName = "com.mysql.jdbc.Driver";
		
			Class.forName(driverName);
			Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		
			String sql  = "SELECT USER_ID, GAME_TYPE, SCORE, MAX_COMBO ";
		   	   	   sql += "FROM play GROUP BY GAME_TYPE, USER_ID, SCORE ";
		   	   	   sql += "HAVING USER_ID = '"+ id +"' ";
		   		   sql += "ORDER BY MAXCOMBO DESC";
		
			PreparedStatement ps;
			ResultSet rs;
			Statement stat = con.createStatement();
			rs = stat.executeQuery(sql);
			while(rs.next()){
				JSONObject 	jsono = new JSONObject();
			
				jsono.put("SCORE", rs.getInt("SCORE"));
				jsono.put("MAXCOMBO", rs.getInt("MAX_COMBO"));
				jsono.put("ID", rs.getString("USER_ID"));
				jsono.put("GAMETYPE", rs.getString("GAME_TYPE"));
			
				jsona.put(jsono); 	 	
				
			}
			rs.close();
			stat.close();
			con.close();
		}catch (ClassNotFoundException e){
			//e.printStackTrace();
			out.println(e);
		}catch (SQLException e){
			//e.printStackTrace();
			out.println(e);
		}finally{
			out.println(jsona);	
		}
	}
%>

