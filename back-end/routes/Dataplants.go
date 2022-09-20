package routes

import (
	"github.com/TheerasakRa/AFS/controller"
	"github.com/gin-gonic/gin"
)

func DataplantsRoute(router *gin.Engine) {
	router.GET("/", controller.GetDataplants)
	router.GET("/:id", controller.GetIdDataplants)
	router.POST("/", controller.PostDataplants)
	router.DELETE("/:id", controller.DelectDataplants)
	router.PUT("/:id", controller.UpdateDataplants)

}
