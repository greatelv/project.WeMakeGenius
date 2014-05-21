
<%@page import="org.json.JSONArray"%>

<%@ page language="java" contentType="text/plain; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="com.wemakegenius.*"%>
<%
	wmgDAO dao = new wmgDAO();
	dao.getConnection();
	
%>