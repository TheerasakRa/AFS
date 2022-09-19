package routes

import
(
	"github.com/TheerasakRa/AFS/controller"
	"github.com/gin-gonic/gin"
)

func DataplantsRoute(router *gin.Engine) {
    router.GET("/", controller.GetDataplants)
    router.POST("/", controller.PostDataplants)
}