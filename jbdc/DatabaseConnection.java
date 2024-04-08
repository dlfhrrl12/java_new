package jbdc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
	//DB����
	//DB Driver, Url, user, password
	//com.mysql.cj.jdbc.Driver
	//jdbc:mysql://localhost:3306/DB��
	
	private static DatabaseConnection dbc = new DatabaseConnection();
	private Connection conn = null;
	private String jbdcDriver="com.mysql.cj.jdbc.Driver";
	private String jbdcUrl = "jdbc:mysql://localhost:3306/javadb";
	
	// ������ : private ����
	private DatabaseConnection() {
		try {
			Class.forName(jbdcDriver); // ����̹��� �ε��ϱ����� ���Ǵ� �޼���
			//url, user, password
			conn = DriverManager.getConnection(jbdcUrl, "javaUser", "mysql");
		} catch (ClassNotFoundException e) {
			// TODO: handle exception
			System.out.println("����̹��� ã�� �� �����ϴ�.");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("���������� ��Ȯ���� �ʽ��ϴ�.");
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
