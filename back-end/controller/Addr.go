package controller

import (
	"net/http"

	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/models"
	"github.com/gin-gonic/gin"
	"fmt"
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

func GetIdAddr(c *gin.Context) {
		id := c.Param("id")
		getid_Addr := []models.Desti{}
		if result := config.DB.Where("id = ?", id).Find(&getid_Addr); result.Error != nil {
			c.IndentedJSON(http.StatusInternalServerError,
				gin.H{"Error": result.Error.Error()})
			return
		}
		c.IndentedJSON(http.StatusOK, &getid_Addr)
	}
	

	
func DeleteAddr(c *gin.Context) {
		id := c.Param("id")
		delete_Addr := []models.Desti{}
		if result := config.DB.Where("id = ?", id).Delete(&delete_Addr); result.Error != nil {
			c.IndentedJSON(http.StatusInternalServerError,
				gin.H{"Error": result.Error.Error()})
			return
		}
		c.IndentedJSON(http.StatusNoContent, &delete_Addr)
	}
	
func UpdateAddr(c *gin.Context) {
		var update_Addr models.Desti
		id := c.Params.ByName("id")
		if err := config.DB.Where("id = ?", id).First(&update_Addr).Error; err != nil {
		   c.AbortWithStatus(404)
		   fmt.Println(err)
		}
		c.BindJSON(&update_Addr)
		config.DB.Save(&update_Addr)
		c.JSON(http.StatusNoContent, update_Addr)
	   }

