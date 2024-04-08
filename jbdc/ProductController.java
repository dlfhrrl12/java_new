package jbdc;

import java.util.List;
import java.util.Scanner;

public class ProductController {
	/* Controller <-> Service <-> DAO <-> DB
	 * COntroller ��� �޴��� �б�ó��
	 * */
	private Scanner scan;
	private Service svc; // ���� �ȸ��� interface
	private boolean flag; // ���ắ��
	
	public ProductController() {
		scan = new Scanner(System.in);
		svc = new ProductServiceImpl(); //service ����ü
		flag = true;
		printMenu();
	}
	
	private void printMenu() {
		while(flag) {
			System.out.println("--��ǰ�������α׷�--");
			System.out.println("1.��ǰ���|2.��ǰ���|3.��ǰ�˻�(��ǰ�󼼺���)");
			System.out.println("4.��ǰ����|5.��ǰ����|6.����");
			System.out.println("�޴�����>");
			
			int menu = scan.nextInt();
			
			switch(menu) {
			case 1: register(); break;
			case 2: list(); break;
			case 3: detail(); break;
			case 4: modify(); break;
			case 5: remove(); break;
			default:
				flag=false;
				break;
			}
		}
	}

	private void remove() {
		// TODO Auto-generated method stub
		
	}

	private void modify() {
		// TODO Auto-generated method stub
		
	}

	private void detail() {
		// ��ǰ �ϳ��� ������ select * from product whiere pno = ?
		System.out.println("��ǰ��ȣ > ");
		int pno = scan.nextInt();
		ProductVo p = svc.getDetail(pno);
		System.out.println(p);
	}

	private void list() {
		// ��ǰ ����Ʈ ��� select * from product;
		List<ProductVo> list = svc.getList();
		//���
		for(ProductVo p : list) {
			System.out.println(p);
		}
		
	}

	private void register() {
		//��ǰ���
		System.out.println("��ǰ�̸�:");
		scan.nextLine();
		String pname = scan.nextLine();
		System.out.println("��ǰ����");
		int price = scan.nextInt();
		System.out.println("��ǰ�󼼳���");
		scan.nextLine();
		String madeby = scan.nextLine();
		ProductVo p = new ProductVo(pname, price, madeby);
		//service���� ����� ��û�ϴ� �޼��� �ۼ�
		int isOk = svc.register(p);
		//�ߵǸ� 1, �ȵǸ� 0
		System.out.println("��ǰ��� "+((isOk > 0)? "����" : "����"));
		
		
	}
	
	
	
}
