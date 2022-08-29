import { Component, OnInit } from '@angular/core';
import { ShopItem } from '../../interfaces/shop.interface';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	Items: ShopItem[] = [
		{
			_id: 'asdasd',
			Title: 'CSE Data Structure and Algorithm',
			Description: 'wow discrete',
			Image:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585186377l/52607803.jpg',
			Price: 'Tk.500'
		},
		{
			_id: 'asdasd',
			Title: 'C Programming Language',
			Description: 'wow discrete',
			Image: 'https://www.ikbooks.com/uploads/BookImages/ikbooks-size120/9789386768384.jpg',
			Price: 'Tk.350'
		},
		{
			_id: 'asdasd',
			Title: 'Electrical Circuits',
			Description: 'wow discrete',
			Image:
				'https://images-na.ssl-images-amazon.com/images/I/510-2S3Hy8L._SX381_BO1,204,203,200_.jpg',
			Price: 'Tk.560'
		},
		{
			_id: 'asdasd',
			Title: 'Fundamental of Electrical Engineering',
			Description: 'wow discrete',
			Image: 'https://images-na.ssl-images-amazon.com/images/I/61WH2TnmO8L.jpg',
			Price: 'Tk.450'
		},
		{
			_id: 'asdasd',
			Title: 'Quantum Physics',
			Description: 'wow discrete',
			Image: 'https://m.media-amazon.com/images/I/511hpqCL01L.jpg',
			Price: 'Tk.1500'
		},
		{
			_id: 'asdasd',
			Title: 'Modern World History',
			Description: 'wow discrete',
			Image:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348643232l/271329.jpg',
			Price: 'Tk.300'
		},
		{
			_id: 'asdasd',
			Title: 'Fundamentals Of Chemistry',
			Description: 'wow discrete',
			Image:
				'https://2f96be1b505f7f7a63c3-837c961929b51c21ec10b9658b068d6c.ssl.cf2.rackcdn.com/products/076416.jpg',
			Price: 'Tk.570'
		},
		{
			_id: 'asdasd',
			Title: 'Advanced Calculus',
			Description: 'wow discrete',
			Image: 'https://i.pinimg.com/originals/bc/b7/d0/bcb7d0db8893376a3605873f75277e1f.jpg',
			Price: 'Tk.590'
		},
		{
			_id: 'asdasd',
			Title: 'Calculus by Anton, Biven, Davis',
			Description: 'wow discrete',
			Image: 'https://assets.chegg.com/rqm/image/upload/f_auto,q_auto/covers/9780470647691.jpg',
			Price: 'Tk.900'
		}
	];
	constructor() {}

	ngOnInit(): void {}
}
