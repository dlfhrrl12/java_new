var pnutBuyClass = function(s){
	var shop	= s;
	var good		= [];
	var price		= [];
	var count		= [];
	var callURL			= "https://tag.adpnut.com/prd/buy";
	var chkT = 1*3600*1000;

	this.set = function(g, p, c)
	{
		if (/=/.test(g))
		{
			var t = g.match(/\?[^=]+=[^&|]+/g);
			if(Object.prototype.toString.call(t) === '[object Array]') g = t.join('|').replace(/\?[^=]+=/g,'');
		}
		good.push(g);
		price.push(p.replace(/,/g,''));
		count.push(c.replace(/,/g,''));
	}

	this.send = function()
	{
		if (!shop || !this.chkDupl()) return;
		url			= callURL+"?shopid="+shop+"&goodscode="+good.join('|')+"&prodcnt="+count.join('|')+"&price="+price.join('|');
		img			= new Image(0,0);
		img.src		= url;
		document.body.appendChild(img);
	}

	this.chkDupl = function()
	{
		if (window.performance && performance.navigation.type > 0) return false;
		if (window.sessionStorage)
		{
			var stor = window.sessionStorage;
			if (parseInt(stor.getItem(shop + "_order"),10) > Date.now()-chkT) return false;
			stor.setItem(shop + "_order", Date.now());
		}
		return true;
	}
}
