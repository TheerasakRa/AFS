package routes

import (
	"github.com/TheerasakRa/AFS/controller"
	"github.com/gin-gonic/gin"
)

func ShopRoute(router *gin.Engine) {
	router.GET("/shop", controller.GetDataShop)
	router.GET("/shop:id", controller.GetIdDataShop)
	router.POST("/shop", controller.PostShop)
	router.DELETE("/shop:id", controller.DeleteShop)
	router.PUT("/shop:id", controller.UpdateShop)

}
