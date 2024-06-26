package jbdc;

import java.util.List;
import java.util.Scanner;

public class ProductController {
	/* Controller <-> Service <-> DAO <-> DB
	 * COntroller 모든 메뉴에 분기처리
	 * */
	private Scanner scan;
	private Service svc; // 아직 안만듦 interface
	private boolean flag; // 종료변수
	
	public ProductController() {
		scan = new Scanner(System.in);
		svc = new ProductServiceImpl(); //service 구현체
		flag = true;
		printMenu();
	}
	
	private void printMenu() {
		while(flag) {
			System.out.println("--상품관리프로그램--");
			System.out.println("1.상품등록|2.상품목록|3.상품검색(상품상세보기)");
			System.out.println("4.상품수정|5.상품삭제|6.종료");
			System.out.println("메뉴선택>");
			
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
		// 상품 하나의 상세정보 select * from product whiere pno = ?
		System.out.println("상품번호 > ");
		int pno = scan.nextInt();
		ProductVo p = svc.getDetail(pno);
		System.out.println(p);
	}

	private void list() {
		// 상품 리스트 출력 select * from product;
		List<ProductVo> list = svc.getList();
		//출력
		for(ProductVo p : list) {
			System.out.println(p);
		}
		
	}

	private void register() {
		//상품등록
		System.out.println("상품이름:");
		scan.nextLine();
		String pname = scan.nextLine();
		System.out.println("상품가격");
		int price = scan.nextInt();
		System.out.println("상품상세내역");
		scan.nextLine();
		String madeby = scan.nextLine();
		ProductVo p = new ProductVo(pname, price, madeby);
		//service에게 등록을 요청하는 메서드 작성
		int isOk = svc.register(p);
		//잘되면 1, 안되면 0
		System.out.println("상품등록 "+((isOk > 0)? "성공" : "실패"));
		
		
	}
	
	
	
}
