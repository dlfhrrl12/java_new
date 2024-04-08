package jbdc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
	//DB접속
	//DB Driver, Url, user, password
	//com.mysql.cj.jdbc.Driver
	//jdbc:mysql://localhost:3306/DB명
	
	private static DatabaseConnection dbc = new DatabaseConnection();
	private Connection conn = null;
	private String jbdcDriver="com.mysql.cj.jdbc.Driver";
	private String jbdcUrl = "jdbc:mysql://localhost:3306/javadb";
	
	// 생성자 : private 생성
	private DatabaseConnection() {
		try {
			Class.forName(jbdcDriver); // 드라이버를 로드하기위해 사용되는 메서드
			//url, user, password
			conn = DriverManager.getConnection(jbdcUrl, "javaUser", "mysql");
		} catch (ClassNotFoundException e) {
			// TODO: handle exception
			System.out.println("드라이버를 찾을 수 없습니다.");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("연결정보가 정확하지 않습니다.");
			e.printStackTrace();
		}
	}
	
	public static DatabaseConnection getInstance() {
		return dbc;
	}
	
	public Connection getConnection() {
		return conn;
	}
}
