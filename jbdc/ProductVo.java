package jbdc;

public class ProductVo {
/*
 * pno int not null auto_increment,
pname varchar(50) not null,
price int not null default 0,
regdate datetime default now(),
madeby text,
 */
	private int pno; //�ڵ�����
	private String pname;
	private int price;
	private String regdate; //default now()
	private String madeby;
	
	//������
	public ProductVo() {}
	
	// ��ǰ��� ->
	public ProductVo(String pname, int price, String madeby) {
		this.pname=pname;
		this.price=price;
		this.madeby=madeby;
	}
	
	//��ǰ����Ʈ -> pno, pname, price
	public ProductVo(int pno, String pname, int price) {
		this.pno=pno;
		this.pname=pname;
		this.price=price;
	}
	
	
	//��ǰ���� -> pno, pname, price, madeby
	public ProductVo(int pno, String pname, int price, String madeby) {
		this(pname, price, madeby);
		this.pno=pno;
	}
	
	//��ǰ�� -> ����
	public ProductVo(int pno, String pname, int price, String regdate, String madeby) {
		this(pno, pname, price, madeby);
		this.regdate=regdate;
	}

	public int getPno() {
		return pno;
	}

	public void setPno(int pno) {
		this.pno = pno;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public String getMadeby() {
		return madeby;
	}

	public void setMadeby(String madeby) {
		this.madeby = madeby;
	}

	@Override
	public String toString() {
		return "ProductVo [pno=" + pno + ", pname=" + pname + ", price=" + price + ", regdate=" + regdate + ", madeby="
				+ madeby + "]";
	}
	
	
	
}
