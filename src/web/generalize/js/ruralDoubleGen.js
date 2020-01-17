//渲染公共顶部
shopHeaderTop('#header-top');
//渲染公共头部
shopHeader('#s-header');
//渲染公共底部
shopFooter('#s-footer');
// 买家首页菜单
getGeneralizeNav();
// 获取数据
var parameter = {
     address: '',
     type: 25,
}
// banner下导航点击
$('.banner_nav ul li').click(function () {
     $('.banner_nav ul .oli').removeClass('hover');
     $(this).addClass('hover');
     parameter.type = $(this).attr("code")
     getList();
     //     window.location.href = '../purchase/productList.html#seach=' + encodeURI(encodeURI($(this).html()))
})


getList();

function getList() {
     ajax({
          url: 'product-api-impl/goodsGroup/searchGoodsByGroupType',
          methods: 'post',
          data: parameter,
          success: function (response) {
               var data = response.data ? response.data : [];
               if (response.code == 200) {
                    var dom = '';
                    if (data.length > 0) {
                         $('#nodata').css('display', 'none');
                    } else {
                         $('#nodata').css('display', 'block');
                    }
                    for (var i = 0; i < data.length; i++) {
                         dom += '  <dl class="fl" id="' + data[i].id + '" supplierid="' + data[i].supplierId + '">';
                         dom += '<dt>';
                         dom += '<img src="' + data[i].imageAddress + '" alt="">';
                         dom += '</dt>';
                         dom += '<dd>';
                         dom += '<p>￥ ' + data[i].goodsMoney + '</p>';
                         dom += ' <p>' + data[i].name + '</p>';
                         dom += '<button class="fr">加入购物车</button>';
                         dom += '</dd>';
                         dom += ' </dl>';
                    }
                    $('.list_bottom').html(dom);
               } else {
                    setMessage({
                         type: 'warning',
                         msg: response.msg
                    })
               }

          },
          error: function (response) {
               console.log(response)
          }
     })

}
// 地图点击
function mpaClick(mapName, id) {
     $('.mapImg').attr('src', 'images/' + mapName + '.png');
     parameter.address = id;
     getList();
     getcity(id);
}
$('.list-head').on('click', '.oli', function () {
     $('.list-head .oli').removeClass('hover');
     $(this).addClass('hover');
     parameter.address = $(this).attr('id');
     getList();
})
//   获取城市

function getcity(id) {
     ajax({
          url: 'member-api-impl/address/selByParentId',
          methods: 'post',
          data: {
               parentId: id
          },
          success: function (response) {
               var data = response.data ? response.data : [];
               if (response.code == 200) {
                    var dom = '';
                    for (var i = 0; i < data.length; i++) {
                         dom += '<li class="fl oli" id="' + data[i].id + '">' + data[i].provinceName + '</li>';
                    }
                    $('.list-head span.cityList').html(dom)
               } else {
                    setMessage({
                         type: 'warning',
                         msg: response.msg
                    })
               }

          },
          error: function (response) {
               console.log(response)
          }
     })
}
// 点击图片去详情
$('.list_bottom').on('click', 'img', function () {
     var dom = $(this).closest('dl');
     window.open('../purchase/productDetails.html?id=' + dom.attr('id') + '&supplierid=' + dom.attr('supplierid'));
})
//   加入购物车
$('.list_bottom').on('click', 'button', function () {
     var dom = $(this).closest('dl');
     ajax({
          methods: 'POST',
          url: 'product-api-impl/shopcar/addAndUpdateShopCar',
          data: {
               goodsId: dom.attr('id'), //商品id
               goodsAddNum: 1, //商品数量
               storeSupplierId: dom.attr('supplierId'), //商品所属供应商id
               goodsInventoryId: ''
          },
          success: function (response) {
               if (response.code == 200) {
                    setMessage({
                         type: 'success',
                         msg: '已加入购物车，可在购物车内查看~'
                    })
               } else {
                    setMessage({
                         type: 'warning',
                         msg: response.msg
                    })
               }

          },
          error: function (response) {
               setMessage({
                    type: 'warning',
                    msg: response.msg
               })
          }
     })
})