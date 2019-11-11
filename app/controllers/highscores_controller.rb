class HighscoresController < ApplicationController
  def create
    @highscore = Highscore.new(highscore_params)

    if @highscore.save
      render json: "Saved Success", status: 500
    else
      render json: @highscore.errors.full_messages, status: 422
    end
  end

  def show
    @top_10_scores = Highscore.get_top_10(highscore_params[:mode])
    render :show
  end

  private
  def highscore_params 
    params.require(:highscore).permit(
      :username,
      :score,
      :mode
    )
  end
end
