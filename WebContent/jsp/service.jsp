<%@ page language="java" contentType="text/plain; charset=utf-8"
    pageEncoding="EUC-KR"%>
<%@page import="org.json.simple.JSONObject"%>
<%
  JSONObject obj=new JSONObject();
  obj.put("name","foo");
  obj.put("num",new Integer(100));
  obj.put("balance",new Double(1000.21));
  obj.put("is_vip",new Boolean(true));
  obj.put("nickname","");
  out.print(obj);
  out.flush();
%>
