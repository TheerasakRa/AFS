package controller

import (
	"net/http"

	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/models"

	"fmt"

	"github.com/gin-gonic/gin"
)

func GetDataShop(c *gin.Context) {
	Datashop := []models.Shop{}
	config.DB.Find(&Datashop)
	c.JSON(http.StatusOK, &Datashop)
}

func GetIdDataShop(c *gin.Context) {
	id := c.Param("id")
	getid_datashop := []models.Shop{}
	if result := config.DB.Where("id = ?", id).Find(&getid_datashop); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, &getid_datashop)
}

func PostShop(c *gin.Context) {
	var new_Datashop models.Shop
	c.BindJSON(&new_Datashop)
	config.DB.Create(&new_Datashop)
	c.JSON(http.StatusOK, &new_Datashop)
}

func DeleteShop(c *gin.Context) {
	id := c.Param("id")
	delete_datashop := []models.Shop{}
	if result := config.DB.Where("id = ?", id).Delete(&delete_datashop); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &delete_datashop)
}

func UpdateShop(c *gin.Context) {
	var update_datashop models.Shop
	id := c.Params.ByName("id")
	if err := config.DB.Where("id = ?", id).First(&update_datashop).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&update_datashop)
	config.DB.Save(&update_datashop)
	c.JSON(http.StatusNoContent, update_datashop)
}
