package routes

import (
	"github.com/TheerasakRa/AFS/controller"
	"github.com/gin-gonic/gin"
)

func Addr(router *gin.Engine) {
	router.GET("/Addr:id", controller.GetIdAddr)
	router.GET("/Addr", controller.GetAddr)
	router.POST("/Addr", controller.PostAddr)
	router.DELETE("/Addr:id", controller.DeleteAddr)
	router.PUT("/Addr:id", controller.UpdateAddr)



}