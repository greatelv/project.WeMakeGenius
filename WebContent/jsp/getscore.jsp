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
	String game_type = request.getParameter("game_type");
	
	System.out.println("game_type : "+game_type);
	System.out.println("type : "+type);
	System.out.println("id : "+id);
	
	if(type.equals("top5")){
		try{
		
			String driverName = "com.mysql.jdbc.Driver";
		
			Class.forName(driverName);
			Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		
			String sql  =	"SELECT USER_ID, DATE(START_TIME) AS START_TIME, SCORE FROM play WHERE GAME_TYPE = '"+game_type+"'"+
							"ORDER BY SCORE DESC LIMIT 5";
		
			PreparedStatement ps;
			ResultSet rs;
			Statement stat = con.createStatement();
			rs = stat.executeQuery(sql);
			while(rs.next()){
				JSONObject 	jsono = new JSONObject();
			
				jsono.put("SCORE", rs.getInt("SCORE"));
				jsono.put("ID", rs.getString("USER_ID"));
				jsono.put("PLAY_TIME", rs.getString("START_TIME"));
			
				jsona.put(jsono); 
				System.out.println("jsona : "+jsona);
				
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
	else if(type.equals("mystats")){
		try{
			
			String driverName = "com.mysql.jdbc.Driver";
		
			Class.forName(driverName);
			Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		
			String sql  = 	"SELECT"+
							"(SELECT MAX_COMBO FROM play WHERE USER_ID='"+id+"' AND GAME_TYPE = '"+game_type+"' ORDER BY MAX_COMBO DESC LIMIT 1) AS max_combo,"+
							"(SELECT SCORE FROM play WHERE USER_ID='"+id+"' AND GAME_TYPE = '"+game_type+"' ORDER BY SCORE DESC LIMIT 1) AS score,"+
							"(SELECT COUNT(*) FROM play WHERE USER_ID='"+id+"' AND GAME_TYPE = '"+game_type+"') AS play_cnt";
		
			PreparedStatement ps;
			ResultSet rs;
			Statement stat = con.createStatement();
			rs = stat.executeQuery(sql);
			while(rs.next()){
				JSONObject 	jsono = new JSONObject();
			
				jsono.put("max_combo", rs.getInt("max_combo"));
				jsono.put("max_score", rs.getInt("score"));
				jsono.put("play_cnt", rs.getString("play_cnt"));
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
	}else if(type.equals("marquee")){
		
		try{
			
			String driverName = "com.mysql.jdbc.Driver";
		
			Class.forName(driverName);
			Connection con = DriverManager.getConnection("jdbc:mysql://ec2-54-199-180-105.ap-northeast-1.compute.amazonaws.com:3306/wmg_dev","wmg","wmg");
		
			String sql  = 	"SELECT a.score, a.user_id, b.name "+ 
								"FROM play AS a "+
								"LEFT OUTER JOIN user AS b ON a.user_id = b.ID "+
							"ORDER BY a.score DESC LIMIT 10 ";

			PreparedStatement ps;
			ResultSet rs;
			Statement stat = con.createStatement();
			rs = stat.executeQuery(sql);
			while(rs.next()){
				JSONObject 	jsono = new JSONObject();
			
				jsono.put("score", rs.getInt("score"));
				jsono.put("user_id", rs.getInt("user_id"));
				jsono.put("name", rs.getString("name"));
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

