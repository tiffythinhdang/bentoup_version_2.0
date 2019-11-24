class Api::HighscoresController < ApplicationController
  def create
    @highscore = Highscore.new(highscore_params)

    if @highscore.save
      render :show
    else
      render json: @highscore.errors.full_messages, status: 422
    end
  end

  def index
    @top_10_scores = Highscore.get_top_10(highscore_params[:mode])
    render :index
  end

  private
  def highscore_params
    params.require(:request).permit(
      :username,
      :score,
      :mode
    )
  end
end