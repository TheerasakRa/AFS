package controller

import (
	"net/http"

	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/models"
	"github.com/gin-gonic/gin"
)
func GetAddr(c *gin.Context) {
	Desti := []models.Desti{}
	config.DB.Find(&Desti)
	c.JSON(http.StatusOK, &Desti)
}

func PostAddr(c *gin.Context) {
	var Desti models.Desti
	c.BindJSON(&Desti)
	config.DB.Create(&Desti)
	c.JSON(http.StatusOK, &Desti)
}
