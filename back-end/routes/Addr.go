package routes

import (
	"github.com/TheerasakRa/AFS/controller"
	"github.com/gin-gonic/gin"
)

func Addr(router *gin.Engine) {
	router.GET("/Addr", controller.GetAddr)
	router.POST("/Addr", controller.PostAddr)


}