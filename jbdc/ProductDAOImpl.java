package jbdc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAOImpl implements DAO {
	//DB����
	private Connection conn;
	//sql ������ �����Ű�� ����ϴ� ��ü
	private PreparedStatement pst;
	//�������� ���� ��Ʈ��
	private String query="";
	
	public ProductDAOImpl() {
		//DBConnection class ����(�̱���)
		DatabaseConnection dbc = DatabaseConnection.getInstance();
		conn = dbc.getConnection();
	}

	//sql ���� ó��
	@Override
	public int insert(ProductVo p) {
		System.out.println("insert DAOImpl success!!");
		query = "insert into product(pname, price, madeby) values(?,?,?)";
		try {
			pst = conn.prepareStatement(query);
			pst.setString(1, p.getPname());
			pst.setInt(2, p.getPrice());
			pst.setString(3, p.getMadeby());
			//insert, update, delete => executeUpadate() return int (ó�������� ����)
			return pst.executeUpdate();
		} catch (SQLException e) {
			System.out.println("insert Error!!");
			e.printStackTrace();
		}
		return 0;
	}

	@Override
	public List<ProductVo> selectList() {
		System.out.println("list DAOImpl success!!");
		query = "select * from product order by pno desc";
		List<ProductVo> list = new ArrayList<>();
		try {
			pst = conn.prepareStatement(query);
			//list => executeQuery(); => return ResultSet
			ResultSet rs = pst.executeQuery();
			while(rs.next()) {
				list.add(new ProductVo(rs.getInt("pno"),
						rs.getString("pname"),
						rs.getInt("price")));
			}
			return list;
		} catch (SQLException e) {
			System.out.println("list Error");
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public ProductVo selectOne(int pno) {
		System.out.println("selectOne DAOImpl success!!");
		query = "select * from product where pno=?";
		try {
			pst = conn.prepareStatement(query);
			pst.setInt(1, pno);
			ResultSet rs = pst.executeQuery();
			if(rs.next()) {
				return new ProductVo(
						rs.getInt("pno"),
						rs.getString("pname"),
						rs.getInt("price"),
						rs.getString("regdate"),
						rs.getString("madeby")
						);
			}
		} catch (SQLException e) {
			System.out.println("detail error!!");
			e.printStackTrace();
		}
		return null;
	}
	
}
