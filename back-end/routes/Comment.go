package routes

import (
	"github.com/TheerasakRa/AFS/controller"
	"github.com/gin-gonic/gin"
)

func CommentRoute(router *gin.Engine) {
	router.GET("/post", controller.GetDataComment)
	router.GET("/post:id", controller.GetIdDataComment)
	router.POST("/post", controller.PostComment)
	router.DELETE("/post:id", controller.DeleteComment)
	router.PUT("/post:id", controller.UpdateComment)

}
